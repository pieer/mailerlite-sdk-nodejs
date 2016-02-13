'use strict';

module.exports = Campaigns;

/**
 * Campaigns.
 * @constructor
 * @param {Client} client - Instance of an API client.
 */
function Campaigns () {
  /**
   * Get all campaigns from your account.
   * @param {number} [limit] - Sets the limit of results in one page (default 1000).
   * @param {number} [page] - You can navigate through records by increasing page number.
   */
  this.getAll = () => {
    //
  };

  /**
   * Retrieve stats about sent campaign.
   * @param {number} id - The ID of the campaign you want the stats for.
   */
  this.getDetails = (id) => {
    //
  };

  /**
   * Get recipients.
   */
  this.getRecipients = () => {
    //
  };

  /**
   * Get opens.
   */
  this.getOpens = () => {
    //
  };

  /**
   * Get clicks.
   */
  this.getClicks = () => {
    //
  };

  /**
   * Get unsubscribes.
   */
  this.getUnsubscribes = () => {
    //
  };

  /**
   * Get spam complaints.
   */
  this.getSpamComplaints = () => {
    //
  };
}
