'use strict';

module.exports = Lists;

/**
 * Lists.
 */
function Lists(client) {
  /**
   * Get all lists from your account.
   */
  this.getAll = () => client.Get('/lists/');

  /**
   * Get details.
   */
  this.getDetails = () => {
    //
  };

  /**
   * Add list.
   */
  this.addList = () => {
    //
  };

  /**
   * Update list.
   */
  this.updateList = () => {
    //
  };

  /**
   * Remove list.
   */
  this.removeList = () => {
    //
  };

  /**
   * Get active subscribers.
   */
  this.getActiveSubscribers = () => {
    //
  };

  /**
   * Get bounced subscribers.
   */
  this.getBouncedSubscribers = () => {
    //
  };
}